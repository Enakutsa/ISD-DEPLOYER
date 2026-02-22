FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    git curl zip unzip libpq-dev libzip-dev libicu-dev nodejs npm

RUN docker-php-ext-install pdo pdo_pgsql zip intl

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html

COPY . .

RUN cp .env.example .env

RUN php -d memory_limit=-1 /usr/local/bin/composer install --no-dev --optimize-autoloader --no-interaction

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

RUN a2enmod rewrite

COPY 000-default.conf /etc/apache2/sites-enabled/000-default.conf

RUN php artisan storage:link --force

EXPOSE 80

CMD bash -c "php artisan migrate --force && apache2-foreground"