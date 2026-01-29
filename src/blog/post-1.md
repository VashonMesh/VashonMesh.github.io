---
title: "VashonMesh Initial Meeting"
pubDate: 2026-01-28
description: "Michael Meyer calls local mesh enthusiasts to order"
author: "John Cornelison"
image:
  url: "./imgs/post-1.1134-andersen-crowd-large-1218297396.jpg"
  alt: "The initial meeting did not have quite this many participants..."
tags: ["VashonMesh", "W7VMI", "VMIRC"]
---

## Our 1st Meeting

Published on: 2026-01-28

The local ham radio club's [message server](https://groups.io/g/W7VMI) has seen
a number of posts related to mesh-networking in the last few years.

Michael Meyers, the head of
[Vashon-Maury Island Radio Club's](https://www.w7vmi.org/)
[Emergency Communications (EmComm) team](https://www.w7vmi.org/emergency-preparedness)
(aka Auxiliary Communication Service (ACS), ARES, and other names) was curious
about mesh technology's value for local disaster preparedness efforts.

He called a gathering of local mesh-networking enthusiasts to explore its use
for EmComm. ![alt text](<./imgs/post-1.Mesh Networking Brainstorm.png>)

## Agenda & Real(tm) Meeting Notes

Michael arranged an initial January 22nd meeting at the library, He showed a
brief Powerpoint slideshow available on the
[club's file server](https://groups.io/g/W7VMI/files) and updated it during the
meeting with notes. File access is for group members. It contains a list of the
initial 10 attendees.

All but one participants had a ham radio sign and should have server access, but
since the intent is to serve the public (including non-radio club members), a
brief review of the discussion is here. (Maybe it should be put onto the Radio
Club's public website going forward?!)

## Discussion

> CAVEAT: This is based on my very limited knowledge!

Current mesh radios allow 255 character texting directly between radios, or to
repeaters which carry the messages onward a certain number of hops. The range
can be between 2km in urban environments up to 10 km in ideal, open conditions.

These radios are inexpensive, roughly $25-50. No license is required to use.
Most devices can serve either as a radio or repeater - upload ('flash') the
software for the desired purpose. Fixed repeaters with solar backed power
supplies and mounted antennas might cost ~$100 or more. Spenser suggests
evaluating higher performance repeaters too.

A half-dozen repeaters might cover much of Vashon-Maury Island. Additional
repeaters could extend coverage where desired & valued. Spenser is
war-driving(?) around to check possible coverage and evaluating tools for
evaluating coverage!

### Channels

[John is confused about how easily one radio can switch between different groups
of radio operators. It sounds like radios & repeaters are manually tuned to one
channel (below) and don't have scanning & other advanced capabilities. He'll
shut up until he actual has one!]

Mesh-networks use specific terminology. We need to figure that out & adopt it.

- Channels don't need a device, they propagate via flood.
- "Rooms" are per device, which makes them single point of failure. Fault
  tolerant options mat exist.

Vashon might start with a couple channels, then expand as we learn more:

1. #puget-sound
2. #vashon: a general Community Channel (or maybe this is a sub-channel of the
   above?) Future:
3. #vashon-emcomm: Emergency Communications
4. #vashon-cert
5. #vashon-mrc

## Traditional Challenges with Shared Radio Channels

- Who (if anyone) acts as "net control" (i.e., coordinates who speaks when) on
  each channel!
- Channels can get overloaded if many (or talkative few) folks try to talk at
  once.
- How to separate the wheat from the chaff with lots of overlapping
  conversations?
- If a device is not on, the message doesn't get delivered. Message queuing &
  "room servers" exist as potential solutions.

Channels can be private (via a shared key) or public. Do sub-channels exist?

- Private rooms are "invite only" but then if the key gets out I don't think you
  can do anything about it. Any user can block messages from another user, but
  they could just change their key. Plus they can still listen.

### Radios and Repeater Devices to Consider

Spenser likes:

- [KEEPTEEN D5L Mesh Solar LoRa Repeater](https://www.amazon.com/gp/product/B0F1MWPF7G/):
  All in one. Sounds like it's well supported and well regarded. This is going
  to be my "plug and play" repeater for travel and events.

- [WisBlock Meshtastic Starter Kit](https://www.amazon.com/RAKwireless-WisBlock-Meshtastic-Starter-RAK19007/dp/B0CHKZJK9C/)
  & RAK Wireless Solar Unify Enclosure Case: This is going to be my experimental
  repeater for trying out code changes.
