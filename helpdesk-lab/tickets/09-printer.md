# Ticket 9: Printer Not Printing

**Scenario:** An IT user says print jobs are stuck in the queue and others can print to the same printer.

## Questions to ask
- Which printer (network, shared or USB)? Does anyone else print to it? What error appears? Did it ever work, and what changed? Paper, toner and lights?

## Approach
1. Open the print queue (Settings, Printers & scanners, Open print queue) and read the status.
2. Restart the **Print Spooler** (`services.msc`, or `net stop spooler` then `net start spooler`).
3. If jobs are stuck, stop the spooler, clear `C:\Windows\System32\spool\PRINTERS\*`, then start it again.
4. If it still fails: set the printer online, remove and re-add it, update the driver, print a test page, and `ping` the printer's IP.
5. Escalate if other users or the printer itself show errors.

## Lab limitation
- The lab has no physical printer or client PC, so this ticket was a walkthrough of the process and the spooler commands rather than a reproduced fault.

## Takeaway
Restarting the spooler and clearing the queue fixes most stuck-job tickets. Always stop the spooler before deleting queue files.
