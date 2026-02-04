---
layout: ../../layouts/Layout.astro
title: Quick Start
description: Get up & running quickly with this slightly opinionated guide.
---

## Step 1: Decide your use case

- First think about how you will be using your device.
  - Use for (public or private) chats around the lowlands of Puget Sound? You want **Meshcore**! (Great for community networks with fixed 'repeaters' and more traffic.)
  - Use for (public or private) chats in the mountains or rural countryside (without much of an existing network) with friends or a Search & Rescue team? You want **Meshtastic**! This is very useful around Puget Sound too, but there will be more traffic jams and scattered conversations. (Great for casual use among a few local users.)
  - Are you monitoring coyotes, sheep, and weather balloons, or a fleet of vehicles and do data studies? You want **LoRaWAN**!
  - You just want a private local, neighborhood dog tracker? Find a commercial solution, or consider something like CapSense? You'll have to do more exploration here.

## Step 2: Get a device

- Meshcore and Meshtastic both run on a wide variety of devices. If it works for Meshtastic, it likely works for Meshcore, just by loading ("flashing") new software on it!
  - To be sure find your device at either:
    - (https://flash.meshcore.uk) or
    - (https://flash.meshtastic.com)
  - Ensure your device supports the USA frequency band (902=928 MHz)

- With some hardware limitations, most devices can serve as "companion radios", "repeaters", or even "room servers". Start out with a companion radio & probably buy a repeater-focused device as your 2nd or 3rrd purchase in the future.

Look at our devices page for more information, but popular, proven devices are

- (Heltec v4)[https://heltec.org/project/wifi-lora-32-v4/], probably with a basic case, or (their fancy one)[https://heltec.org/project/wifi-lora-32-v4-expansion-housing/].
- various LilyGo products
- SeeedStudio.com products, including their [Tracker P1](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html) or SenseCap Tracker T1000-E (check delivery dates!)
- RAK

### Non-chat options (LoraWAN and dog trackers) are out of scope for our discussion, but

- LoraWAN: a plethora of info and device options exist. Bosch Group, Cisco, Orange SA, and Semtech are popular manufacturers, or see SeeedStudio.com for a nice selection too
- For dog trackers, automated chicken coops & other use cases, check out https://tryFi.com, https://tracki.com, https://chickenclucks.com, https://hackaday.com

## Step 3: Typical Installation Sequence

- Buy a device for writing and reading texts
- Many folks buy a repeater too, but less important as the network grows
- Flash the device with your desired software
- Install your companion device web or phone app
- Connect from the wb or app to your device
  - Bluetooth
  - WiFi
  - USB Cable
  - Remote LoRa
- Settings
- Advertise
- See if you were seen/repeated!

**![](https://blog.seeedstudio.com/wp-content/uploads/2020/07/1-1030x294.png)**

- Chart from
  https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/

Vashon will start with MeshCore, but may adopt other technologies (in parallel)
if there is desire.

**Reading**

- **Lora vs
  LoraWan**: https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/
- MeshCore vs
  Meshtastic: [MeshCore vs Meshtastic | Austin Mesh](https://www.austinmesh.org/learn/meshcore-vs-meshtastic/)

For more info: <www.PugetMesh.org>, or probably better is to join their Discord
server: https://discord.gg/3sqhZg7E

I’m smitten by products from
https://www.seeedstudio.com/LoRa-and-Meshtastic-and-4G-c-2423.html, but Heltec,
LilyGo and lots of others make compatible devices…

## What is Mesh Radio

- Technologies (pros & cons)
  - LoRa
  - LoRaWAN
  - Meshtastic
  - MeshCore
  - Beartooth
  - PTP

### Use Cases

- EmComm
- Family & friends
- https://www.seeedstudio.com/Loko-GPS-Tracker-p-6261.html is an example of a
  device you could put on a wandering dog with an associated receiver.

### secure

- The MeshCore C++ library automatically encrypts everything, so client apps don't have to worry about that, but everything that goes over the air is encrypted. For DM chats with another user, the packets are encrypted using ECDH (Elliptic Curve, Diffie Hellman) in the popular x25519 'curve', and then using AES128. Group chats are AES128 encrypted, with pre-shared symmetric keys.
- https://buymeacoffee.com/ripplebiz/some-big-news

### Vocabulary/Glossary

- Device can be flashed as a message board – limit?
- Repeater can be a message board
- Private channels
- Messages preserved on device with a rolling buffer
- Encrypted and authenticated
- Messages are not stored forward
- No priority recognition – competing with thermostats, irrigation systems, all
  of Seattle and Tacoma
- Could create a Vashon channel
- Could create an EMCOMM channel
- Consider hanging two repeaters at each location – one for PugetMesh, one
  Vashon-mostly for EMCOMM – on two different frequencies

Meshtastic vs Meshcore: https://www.youtube.com/watch?v=BezGb65kb_c

## Flash

choose your option:

- Radio
- Repeater
- Room Server (16 msg queue), see
  https://www.73mesh.com/2025/11/19/RoomServers.html
- ???

ARDEN https://downloads.arednmesh.org/snapshots/SUPPORTED_DEVICES.md

ATAK - https://www.rtl-sdr.com/kiss_lora_tak-integrating-esp32-lora-with-tak/
https://www.reddit.com/r/ATAK/comments/plfboh/hampr_human_manet_portable_radio/

HaMPR: Human Attached Mesh Portable Radio
https://docs.google.com/document/d/e/2PACX-1vQ-CQPKQoxwUs22BxCVVWEgoi6T5WjK5gj4A6dTuFdoL3xQOzWndhEsBhI49IOAK_8EMrfJ6XgIs75I/pub

https://ispdesign.ui.com/# - UISP Design Center https://www.ui.com/
