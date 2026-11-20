# Ticket 7: No Internet at Desk

**Scenario:** A Sales user says she has no internet while a coworker beside her is fine.

## Questions to ask
- Wired or Wi-Fi? Any error message? Did it work before? Anything change? Is a VPN running?

## Steps I took (bottom up)
1. `ipconfig /all`: IPv4 address `10.0.10.10` (not `169.254.x.x`, so DHCP is not the issue), default gateway `10.0.10.1`, DNS `127.0.0.1` and `::1` (a domain controller uses itself for DNS).
2. `ping 127.0.0.1`: reply (the PC's network software works).
3. `ping 10.0.10.1`: reply (the gateway is reachable).
4. `ping 8.8.8.8`: reply (the internet is reachable by IP).
5. `ping google.com`: reply (DNS works).
6. `ipconfig /flushdns`: cache flushed successfully.

## Conclusion
The network path was healthy. The taskbar "no internet" icon was a false status. On a real ticket where everything passes, I'd check the browser, proxy and VPN, the clock, specific sites, and escalate with the `ipconfig` and ping output if it is only that PC.

## Takeaway
Where the test first fails tells you the layer: cable or switch, DHCP, gateway, internet, or DNS.
