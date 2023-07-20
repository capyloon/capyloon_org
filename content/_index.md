---
title: "Home"
date: 2022-12-09T19:01:03+07:00
draft: false
---

There really shouldn't be a divide between “native” and “web”. At least not in the way people build apps. 

Here's the code for a button on 5 different platforms
```
// Android
<Button android:text="I'm a button">

// iOS
Button("I'm a button")

// UWP (Windows)
<Button content="I'm a button" />

// Web
<Button>I'm a button</Button>
```

And of these platforms, the web code can run any of these platforms. Because there are ~~rendering engines~~ browsers that work across all of them. It's why people build with [Electron](https://www.electronjs.org/).

And if you can really draw anything with the web, target any platform, then why do we still need to learn all this platform-specific stuff? 

Capyloon is a web-first mobile operating system that takes lovable web technologies all the way to embedded hardware. It's built in the open. Security is top of mind. And you can target it for a lot more than just phones.

{{<imagecontainer>}}
{{< figure src="/screenshots/mobile-1.png" title="Lockscreen" >}}
{{< figure src="/screenshots/mobile-2.png" title="Home Screen" >}}

{{</imagecontainer>}}

Seriously, check out the UI code, it's just [HTML/CSS/JS](https://github.com/capyloon/nutria/tree/main/apps/homescreen).

Now you’re probably thinking *why*? 

#### Open
The web, and mostly everything built around it, is [open](https://www.w3.org/). It’s not a proprietary technology. From accessbility, localization and security, a bunch of people talk through these things.

Capyloon is powered by Gecko (the thing that powers Firefox), and it's out in the [open](https://github.com/capyloon).

#### Easy to Develop
You know how easy it is to build for the web? As easy as firing up your browser and editing some code. 

Capyloon is no different. Here's the code for the [lockscreen](https://github.com/capyloon/nutria/tree/main/apps/homescreen). Want to build experiences for AR glasses, a smartwatch, or even a doorbell, all it takes is some HTML/CSS. 

#### Experimental
Okay, this is us dreaming. But this system has everything from the UI down to the hardware. That means we have so much room to experiment. To really think how devices are connected. 

Portable electronics don't have to be a blackbox. In fact, we're working on integrating  


## Try it!

Yes. It runs on actual devices. Here it is running on [Pinephone](#) and [Librem 5](#).


#### Desktop builds

You can download the latest Debian package [here](packages).

#### Device builds

You can download the latest image [here](packages).


### Join Us

Do we have it all figured out? Absolutely not. We can make things look better. We can make things

Would we be upset if you took our code, closed-sourced it, and 

The code is available on [github](https://github.com/capyloon). The main repositories are:

- [Nutria](https://github.com/capyloon/nutria) : This is Capyloon set of Web apps. If you are a front-end developer, you will find everything you need in this repository.
- [api-daemon](https://github.com/capyloon/api-daemon) : Non standard apis exposed to the UI. The [contentmanager](https://github.com/capyloon/api-daemon/tree/main/services/contentmanager) service is specific to Capyloon, and provides the data management layer.
- [B2G](https://github.com/capyloon/B2G) : Gonk based devices. The Pixel 3a and Android Generic System Images are currently supported.

Feel free to join the discussion in our [Matrix chat room](https://matrix.to/#/#capyloon:matrix.org), or to [email us](mailto:contact@capyloon.org) for any inquiry.