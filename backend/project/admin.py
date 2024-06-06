from django.contrib import admin
from django.utils.text import slugify
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'technologies', 'repository_url', 'live_url')
    search_fields = ('title', 'technologies')
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('technologies',)

    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'description', 'technologies')
        }),
        ('URLs', {
            'fields': ('repository_url', 'live_url')
        }),
        ('Media', {
            'fields': ('image',)
        }),
    )

    def save_model(self, request, obj, form, change):
        if not obj.slug:
            obj.slug = slugify(obj.title)
        super().save_model(request, obj, form, change)
