---
layout: ../layouts/NormalLayout.astro
title: Get a Radio
description: Guide to choosing and setting up mesh networking devices and radios
---

# Get a Radio

How to get started, **Devices**

- Maps of current users
- Expectations of range/channel selection
- Handheld Devices
- Repeaters
- Antennas
- Sensors
- EmComm

## some optinos

Hi Susan, I'm no expert and don't have personal experience (yet!), but am also
trying to learn! A couple ideas/considerations:

- Most devices can be used either as a repeater or a client. Different software
  is loaded ("flashed") on to the same device, so you can switch roles as you
  wish in the future.
- Any device that works with Meshtastic generally will be able to work with
  MeshCore. Just load different software on to it.
- Ensure you buy one that supports the US frequency 915MHz. Most will.
- Most devices will use bluetooth to interact with an app on your smartphone,
  since most don't have keyboards.

See https://meshtastic.org/docs/hardware/devices/ has some great general tips,
and a full listing of devices.

Popular vendors for trackers: Seeed Studio: I just bought this:
https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html M5Stack: Dan bought
this: https://shop.m5stack.com/products/m5stack-cardputer-adv-version-esp32-s3 +
https://shop.m5stack.com/products/cap-lora-1262-for-cardputer-adv-sx1262-atgm336h?variant=47023567274241
which has all you need, no smartphone required! LilyGo:
https://lilygo.cc/collections/lora-or-gps Heltec -
https://heltec.org/product-category/plug-and-play/ shows just some of their
options RAK

For fixed position repeater use:

- PugetMesh uses a Raspberry Pi connected to a Lora Radio: more software
  options, more complex, more power consumption
- Recommendations from overseas: https://www.localmesh.nl/en/meshcore-repeater/
- https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html
  is a nice all-in-one unit that I've just ordered for my rooftop.
- Dan used a HelTec for his repeater setup
- Small antennas seem popular, but large 5 foot antennas (if well built and
  tuned- many apparently are not) help for repeater setups: e.g.  
  https://www.dxengineering.com/parts/dmn-bc920

More discussion: https://www.facebook.com/groups/2195603327524397/ And of course
the PugetMesh Discord server has a #hardware-mc (MeshCore) channel.
https://discord.gg/Y4PddSUd

## Decide your form factor

What are you looking for: Simple, little to no UI

- Seeed tracker
- companion to your smartphone

All in one: Dan's computer

futureistic: cell phone lookalike

## Flashing

https://flasher.meshtastic.org/ https://flasher.meshcore.dev/

https://www.youtube.com/watch?v=uyIYIUaElUQ

## Popular Devices

this compares ~8 devices - with real world experience!
https://www.youtube.com/watch?v=VGiNDgdkyhs

Also https://www.youtube.com/watch?v=CZMHWFDZ77Y does a comparison & has lots of
related videos with related topics if you also have a boring Saturday night!

https://github.com/adafruit/Adafruit_nRF52_Bootloader/tree/master USB-enabled
bootloaders for the nRF52 BLE SoC chips

- Seeed Studio Wio-WM1100 (Tracker)
  - https://wiki.seeedstudio.com/wio_tracker_kit_meshtastic/ &
  - https://www.youtube.com/watch?v=uyIYIUaElUQ
  - https://meshtastic.org/docs/hardware/devices/community-supported/seeed-studio/wio-series/seeed-wm1110/

- red board: Flashing Meshtastic on the WIO Tracker 1110 from Seeed Studio
- https://www.youtube.com/watch?v=uyIYIUaElUQ

https://wiki.seeedstudio.com/solar_node/

https://wiki.seeedstudio.com/t1000_e_tracker_meshtastic/

https://adrelien.com/meshtastic-diy-how-to-build-your-own-meshtatic-node-esp32-lora-radio/

Heltec.org

- WiFi LoRa 32 series
- - https://heltec.org/project/wifi-lora-32-v4-expansion-housing/

https://docs.astro.build/en/guides/routing/#pagination

https://lilygo.cc/products/t-display-p4
