# Generated by Django 2.0.10 on 2019-02-13 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("api", "0001_initial")]

    operations = [
        migrations.CreateModel(
            name="Suggestion",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "user_name",
                    models.CharField(blank=True, max_length=50, null=True),
                ),
                (
                    "matric_no",
                    models.CharField(blank=True, max_length=10, null=True),
                ),
                (
                    "user_email",
                    models.EmailField(
                        db_index=True, max_length=50, unique=True
                    ),
                ),
                (
                    "set_name",
                    models.CharField(blank=True, max_length=50, null=True),
                ),
                ("set_name_reason", models.TextField(blank=True, null=True)),
                (
                    "community_projects",
                    models.TextField(blank=True, null=True),
                ),
                ("souvenirs", models.TextField(blank=True, null=True)),
                ("events", models.TextField(blank=True, null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.RemoveField(model_name="user", name="groups"),
        migrations.RemoveField(model_name="user", name="user_permissions"),
        migrations.DeleteModel(name="User"),
    ]
