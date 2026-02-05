---
layout: ../../layouts/Layout.astro
title: Mesh Networking
description: Learn about LoRa, Meshtastic, MeshCore and other mesh networking technologies
---

# Mesh-Networking

## About mesh-networks

I’m just learning, but LoRa (from <www.st.com>) is the underlying technology.
https://en.wikipedia.org/wiki/LoRa

There are a wide variety of networking schemes that take advantage of LoRa:

- LoRaWAN (The big industry consortium, great for sending lots of sensor data
  from the field to the cloud)
- Meshtastic (great for casual 255 character text conversations between limited
  numbers of folks out and about)
- MeshCore (great for 255 character text conversations in a larger community of
  more people with fixed repeaters)
- Devices can readily be flashed to use MeshCore or Meshtastic, but can also
  easily just be used point to point, like the tracker above.

**Technology Options**

- **Lora** - The base technology allowing long range, low bandwidth
  communications.
- **PTP** - Point to point: two devices can talk to one another simply
- **LoraWan** - Huge industry led solution for gathering sensor data into the
  cloud.
- **Meshtastic** - Great for casual use among a few local users
- **MeshCore** - Great for community networks with fixed 'repeaters' and more
  traffic
- **AREDN** - Amateur Radio Emergency Data Network. This does NOT use Lora.
  "Instead The frequency ranges that are currently supported are the 900 MHz,
  2.4 GHz, and 5.8 GHz bands. These microwave frequencies do require direct line
  of sight for reliable communication. Depending on the type of radios and
  antennas that are deployed, it’s possible to achieve network links anywhere
  from a few miles to well over 30 miles between sites." Included here as an
  alternative, or source of conventions/framework that maybe helpful. PugetMesh
  acknowledges them prominently on their site.

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
  also <https://nodakmesh.org/blog/meshcore-vs-meshtastic-comparison/.

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
