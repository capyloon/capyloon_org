---
title: "Home"
date: 2022-12-09T19:01:03+07:00
draft: false
---

# Capyloon

# Embedding Devices with Modern Web

Capyloon is an experimental user agent that aims to give you what you deserve: privacy and control through freedom from the constraints imposed by OS vendors and service providers who decide what you can or can't do online, and how.

{{< carousel items="1" height="40" unit="%" duration="" >}}

Modern mobile OSes like to present themselves as paragons of user friendliness and power. That can't be less true however: for instance, why can't you easily know what song was playing at a given point of a cycling route once home? Of course you can't expect applications to all know about each other - but the current OSes are failing to bridge that gap for you.

Both for business reasons and because of their dated design, the incumbents mobile OSes favor silos bundling applications code with their data.

Instead, you should to be able to make the most of the data you create and consume when using these services, on your own terms.

Fortunately we have solid foundations to build on: the Web as an application platform offers unique strengths to remedy to these problems. A Web runtime has unrivaled capabilities to leverage your online activity for your benefit. That's why Capyloon is built as a Web based OS, re-using and extending [b2gOS](https://github.com/b2gOS).

It's still early days and we don't have all the answers, so it's important to keep an open mind and to experiment with new ideas. The current prototype starts to explore some: support for the IPFS protocol and for privacy respecting Web Assembly plugins to bring code to your data instead of the other way around.

Can these technologies (and others!) fit together to provide user control alongside the creation of an ecosystem for creators of content and plugins? What kind of payment system can fit in? What are the UX challenges?

### Try it!

#### Desktop builds

You can download the latest Debian package [here](packages).

#### Device builds

You can download the latest image [here](packages).

### Join Us

The code is available on [github](https://github.com/capyloon). The main repositories are:

- [Nutria](https://github.com/capyloon/nutria) : This is Capyloon set of Web apps. If you are a front-end developer, you will find everything you need in this repository.
- [api-daemon](https://github.com/capyloon/api-daemon) : Non standard apis exposed to the UI. The [contentmanager](https://github.com/capyloon/api-daemon/tree/main/services/contentmanager) service is specific to Capyloon, and provides the data management layer.
- [B2G](https://github.com/capyloon/B2G) : Gonk based devices. The Pixel 3a and Android Generic System Images are currently supported.

Feel free to join the discussion in our [Matrix chat room](https://matrix.to/#/#capyloon:matrix.org), or to [email us](mailto:contact@capyloon.org) for any inquiry.
