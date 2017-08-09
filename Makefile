setup:
	composer install
	cp .env.example .env
	php artisan key:generate
	yarn install
	make authorize
	make run

authorize:
	rm -rf ./storage/logs/laravel.log
	touch ./storage/logs/laravel.log
	sudo chmod -R 777 ./storage/
	sudo chmod -R 777 ./vendor/
	sudo chmod -R 777 ./bootstrap/
	composer dump-autoload
	php artisan cache:clear

run:
	php artisan serve --host=local.classified.dev &
	npm run hot &

rebase:
	composer install
	rm -rf ./storage/logs/laravel.log
	touch ./storage/logs/laravel.log
	yarn
