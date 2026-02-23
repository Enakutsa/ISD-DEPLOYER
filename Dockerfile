FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    git curl zip unzip libpq-dev libzip-dev libicu-dev nodejs npm

RUN docker-php-ext-install pdo pdo_pgsql zip intl

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html

COPY . .

RUN echo "APP_NAME=ISD\nAPP_ENV=production\nAPP_KEY=\nAPP_DEBUG=false\nAPP_URL=https://isd-deployer.onrender.com\nDB_CONNECTION=pgsql\nSESSION_DRIVER=file\nCACHE_STORE=file\nQUEUE_CONNECTION=sync\n" > .env

RUN php -d memory_limit=-1 /usr/local/bin/composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

RUN php artisan key:generate --force

RUN php artisan package:discover --ansi 2>/dev/null; exit 0

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

RUN a2enmod rewrite

COPY 000-default.conf /etc/apache2/sites-enabled/000-default.conf

RUN php artisan storage:link --force

EXPOSE 80

CMD bash -c "php artisan migrate --force 2>/dev/null; apache2-foreground"