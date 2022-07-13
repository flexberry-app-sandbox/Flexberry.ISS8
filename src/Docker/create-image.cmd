docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss8/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss8/app ../..
