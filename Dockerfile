FROM php:8.2-apache

# Installer dépendances système
RUN apt-get update && apt-get install -y \
    git curl zip unzip libpq-dev libzip-dev libicu-dev nodejs npm

# Extensions PHP nécessaires
RUN docker-php-ext-install pdo pdo_pgsql zip intl

# Installer Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Définir le dossier de travail
WORKDIR /var/www/html

# Copier tout le projet
COPY . .

# Installer dépendances Laravel
RUN php -d memory_limit=-1 /usr/local/bin/composer install --no-dev --optimize-autoloader --no-interaction

# Installer et builder React
RUN npm install && npm run build

# Copier le build React dans le dossier public de Laravel
RUN cp -r build/* public/

# Droits pour Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Activer mod_rewrite pour Laravel
RUN a2enmod rewrite

# Config Apache : pointer vers public/
COPY 000-default.conf /etc/apache2/sites-enabled/000-default.conf

EXPOSE 80
