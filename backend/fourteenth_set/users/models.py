from django.contrib.auth.models import AbstractUser
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.db import models
from django.utils.translation import ugettext_lazy as _


# class CustomUserManager(UserManager):
#     def _create_user(self, username, email, password, **extra_fields):
#         """
#         Create and save a user with the given username, email, and password.
#         """
#         superuser = extra_fields.get("is_superuser")
#         if not username and not superuser:
#             raise ValueError("The given username must be set")
#         email = self.normalize_email(email)

#         if username:
#             username = self.model.normalize_username(username)

#         user = self.model(username=username, email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, password, **extra_fields):
#         extra_fields.setdefault("is_staff", True)
#         extra_fields.setdefault("is_superuser", True)

#         if extra_fields.get("is_staff") is not True:
#             raise ValueError("Superuser must have is_staff=True.")
#         if extra_fields.get("is_superuser") is not True:
#             raise ValueError("Superuser must have is_superuser=True.")
# return self._create_user(None, email, password, **extra_fields)


class User(AbstractUser):

    # First Name and Last Name do not cover name patterns
    # around the globe.

    username_validator = UnicodeUsernameValidator()
    name = models.CharField(_("Name of User"), blank=True, max_length=255)
    username = models.CharField(
        _("username"),
        max_length=150,
        unique=True,
        blank=True,
        null=True,
        help_text=_(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
        validators=[username_validator],
        error_messages={
            "unique": _("A user with that username already exists.")
        },
    )
    first_name = models.CharField(
        _("first name"), max_length=50, blank=True, null=True
    )
    last_name = models.CharField(
        _("last name"), max_length=50, blank=True, null=True
    )
    email = models.EmailField(
        _("email address"), blank=False, unique=True, db_index=True
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    # objects = CustomUserManager()

    def __str__(self):
        return self.email

    def get_username(self):
        if self.username:
            return self.username
        return self.email

    def get_full_name(self):
        """
        Return the first_name plus the last_name, with a space in between.
        or return email if any of the names is not set
        """
        if self.first_name and self.last_name:
            full_name = "%s %s" % (self.first_name, self.last_name)
            return full_name.strip()
        return self.email
