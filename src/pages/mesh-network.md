---
layout: ../layouts/Layout.astro
title: Mesh Networking
description:
  Learn about LoRa, Meshtastic, MeshCore and other mesh networking technologies
---

# Mesh-Networking

- an item

## About mesh-networks

https://www.seeedstudio.com/Loko-GPS-Tracker-p-6261.html is an example of a
device you could put on a wandering dog with an associated receiver.

I’m just learning, but LoRa (from www.st.com) is the underlying technology.
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

For more info: www.PugetMesh.org, or probably better is to join their Discord
server: https://discord.gg/3sqhZg7E

I’m smitten by products from
https://www.seeedstudio.com/LoRa-and-Meshtastic-and-4G-c-2423.html, but Heltec,
LilyGo and lots of others make compatible devices…

## MeshCore on Vashon

- a third point

## What is Mesh Radio

- Technologies (pros & cons)
  - LoRa
  - LoRaWAN
  - Mestastic
  - MeshCore
  - Beartooth
  - PTP
- Use Cases
  - EmComm
  - Family & freinds
- Vocabulary/Glossary
- Reading

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

Mestastic vs meshcore: https://www.youtube.com/watch?v=BezGb65kb_c

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

HAMPR: Human Attached Mesh Portable Radio
https://docs.google.com/document/d/e/2PACX-1vQ-CQPKQoxwUs22BxCVVWEgoi6T5WjK5gj4A6dTuFdoL3xQOzWndhEsBhI49IOAK_8EMrfJ6XgIs75I/pub

https://ispdesign.ui.com/# - UISP Design Center https://www.ui.com/
