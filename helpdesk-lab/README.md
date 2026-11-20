# Help Desk Home Lab: Active Directory

A hands-on lab I built to practice the day-to-day work of a Help Desk Technician: managing accounts and access in Active Directory, troubleshooting common issues, and handling tickets the way a real help desk would.

> All users, names and tickets in this lab are fictional.

## Lab environment

| Item | Detail |
|---|---|
| Hypervisor | Oracle VirtualBox on a Mac |
| Server | Windows Server 2022 (evaluation), domain controller `DC01` |
| Domain | `lab.local` |
| VM resources | 4 vCPUs, 6 GB RAM, Guest Additions installed |
| Tools used | Active Directory Users and Computers (ADUC), Group Policy Management (GPMC), Event Viewer, Command Prompt, File Explorer / sharing |

## What I built
- **5 organizational units:** Sales, Finance, IT, HR, Marketing, plus a Disabled Users OU
- **Users:** 10 test users (two per department) plus a new hire
- **Security groups:** `Sales-Team`, `Finance-Share`
- **File share:** `\\DC01\Finance` with share and NTFS permissions assigned to a group
- **Account lockout policy:** lockout after 3 failed attempts (30-minute duration and window)

## Tickets I worked

| # | Ticket | Skills practiced |
|---|---|---|
| 1 | [Password reset](tickets/01-password-reset.md) | Identity verification, ADUC reset, forced change at logon |
| 2 | [Account lockout](tickets/02-account-lockout.md) | Lockout policy, Event ID 4740, unlocking, finding the source |
| 3 | [New hire setup](tickets/03-new-hire.md) | Account creation, group membership, handoffs |
| 4 | [Terminated employee](tickets/04-terminated-employee.md) | Disable (not delete), password reset, Disabled OU |
| 5 | [Shared folder access](tickets/05-shared-folder-access.md) | Share vs NTFS permissions, group-based access, approval |
| 6 | [Department transfer](tickets/06-department-transfer.md) | OU move, attribute updates, group changes |
| 7 | [No internet](tickets/07-no-internet.md) | ipconfig, ping, DNS, bottom-up troubleshooting |
| 8 | [Slow computer](tickets/08-slow-computer.md) | Task Manager, memory, disk, startup, uptime |
| 9 | [Printer not printing](tickets/09-printer.md) | Print Spooler, clearing a queue |
| 10 | [Suspected phishing](tickets/10-phishing.md) | Containment, password reset, event logs, reporting |

## What I learned
- **Verify identity before changing an account.** A caller's phone number and email are not enough on their own.
- **Find the cause before you unlock.** Event 4740 shows which computer is sending the bad password.
- **Disable, don't delete,** when someone leaves. It keeps the mailbox, files and audit trail.
- **Use groups, not individual users,** for access. The most restrictive of share and NTFS permissions applies.
- **Group changes need a new logon** to take effect. Group Policy changes need `gpupdate /force` to apply right away.
- **Troubleshoot from the bottom up:** IP address, gateway, internet by IP, then by name.
- **Know your limits.** Hand off clearly what isn't yours, and don't close a ticket that isn't finished.

## Not covered yet
- Microsoft 365 administration and Jira / Atlassian Cloud (planned)
- A domain-joined client PC (the lab uses the domain controller for local troubleshooting)
- VPN and remote-support tools

## Notes
- Windows Server is an evaluation copy. The VM disk and ISO are not included in this repository.
- No credentials or real company data appear anywhere in this project.
