# Ticket 8: Slow Computer

**Scenario:** A Finance user says her laptop has been slow for a week, with Excel taking a minute to open.

## Questions to ask
- Since when, which apps, when was the last restart, any recent changes or low-disk warnings, and is anyone else affected?

## Steps I took
1. Opened **Task Manager** (`Ctrl+Shift+Esc`) and sorted by CPU, Memory and Disk.
2. Checked the **Startup** tab for high-impact items.
3. Checked free disk space and memory from the command line:
   - `wmic OS get FreePhysicalMemory,TotalVisibleMemorySize`: about 69% memory free
   - `wmic logicaldisk get caption,freespace,size`: about 78% free on C:
   - `systeminfo | find "System Boot Time"`: last restart shortly before the check

## Conclusion
Nothing was overloaded, which is a valid result. I'd then look at the application itself, the network or a recent update.

## Reference: what to look for when it is a real problem
| Finding | Likely cause | Action |
|---|---|---|
| Long uptime | Never restarted | Restart and re-test |
| Disk at 100% | Updates, scans or a failing drive | Wait or clean up, check disk health |
| Under about 10% disk free | Full drive | Clear temp files, move large files |
| Memory above about 90% | Too many apps or too little RAM | Close apps, trim startup, consider an upgrade |
