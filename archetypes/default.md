---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
# Table of content (toc) is enabled by default. Set this parameter to true to disable it.
# Note: Toc is always disabled for chapter pages
disableToc : "false"
# If set, this will be used for the page's menu entry (instead of the `title` attribute)
menuTitle : ""
# The title of the page in menu will be prefixed by this HTML content
pre : ""
# The title of the page in menu will be postfixed by this HTML content
post : ""
# Set the page as a chapter, changing the way it's displayed
chapter : false
# Hide a menu entry by setting this to true
hidden : false
# Display name of this page modifier. If set, it will be displayed in the footer.
LastModifierDisplayName : ""
# Email of this page modifier. If set with LastModifierDisplayName, it will be displayed in the footer
LastModifierEmail : ""
---
