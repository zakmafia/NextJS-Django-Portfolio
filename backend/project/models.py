from django.db import models
from django.utils.text import slugify

class Project(models.Model):
    title = models.CharField(max_length=200, unique=True)
    description = models.TextField()
    technologies = models.CharField(max_length=200)
    repository_url = models.URLField(max_length=200, blank=True)
    live_url = models.URLField(max_length=200, blank=True)
    image = models.ImageField(upload_to='project_images/', null=True, blank=True)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Project, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
