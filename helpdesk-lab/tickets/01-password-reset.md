# Ticket 1: Password Reset

**Scenario:** A Sales user (Jane Smith) forgot her password and cannot sign in.

## Steps I took
1. Planned to verify identity first: employee ID, manager, and a callback to the number on file, plus device and company email. The temporary password is **not** put in the ticket.
2. In ADUC, opened the **Sales** OU and found the user.
3. Right-click the user, **Reset Password**.
4. Ticked **User must change password at next logon** and **Unlock the user's account**.
5. Gave the temporary password to the user by phone, not through the ticket.

## Verification
- The account is enabled and set to change the password at next logon.

## What I'd do differently or add
- Verification on a phone number or email alone is weak. A callback to the number in the directory, or manager confirmation for a suspicious call, is stronger.
- Ask whether the account is signed in on other devices (a stale saved password causes lockouts right after a reset).

## Takeaway
Always verify identity first. A reset without verification is how social engineering works.
