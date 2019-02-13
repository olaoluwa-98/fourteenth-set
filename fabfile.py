from fabric.api import local, run, cd, env, sudo

env.hosts = ["fourteenth-set@the14thset.covenantuniversity.edu.ng"]
code_dir = "/home/fourteenth-set/fourteenth-set"


def show_django_logs():
    print("showing django logs")
    with cd(code_dir):
        run("docker-compose logs --follow django")


def show_nginx_logs():
    print("showing nginx logs")
    with cd(code_dir):
        run("docker-compose logs --follow nginx")


def deploy():
    with cd(code_dir):
        run("git pull")
        run("docker image prune -f")
        run("docker-compose build --no-cache nginx")
        run("docker-compose build django")
        run("docker-compose stop django nginx")
        run("docker-compose rm -f django nginx")
        run("docker-compose up -d nginx")


def django_shell():
    with cd(code_dir):
        run("docker-compose exec django sh")


def backup_db_to_dropbox():
    with cd(code_dir):
        run("chmod +x database-backup.sh")
        run("./database-backup.sh")
