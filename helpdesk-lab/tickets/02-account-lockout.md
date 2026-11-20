# Ticket 2: Account Lockout

**Scenario:** A Sales user (Marcus Lee) says his account keeps locking after a password change.

## Setup
A new domain has the lockout threshold at 0, meaning accounts never lock. I set it in GPMC:
1. GPMC, expand the domain, right-click **Default Domain Policy**, **Edit**.
2. **Computer Configuration, Policies, Windows Settings, Security Settings, Account Policies, Account Lockout Policy.**
3. Set **Account lockout threshold = 3** (30-minute duration and observation window).
4. Ran `gpupdate /force`, then `net accounts` to confirm **Lockout threshold: 3**.

## Reproducing the lockout
- Failed logons against the user's account (`net use \\DC01\IPC$ /user:LAB\mlee <wrong password>`). Three bad passwords returned error 1326, and the next attempt returned error 1909 (account locked out).
- An early attempt didn't lock the account because the failed attempts were against the wrong username, so the failure events (4625) existed but no lockout (4740) did.

## Steps I took
1. Opened Event Viewer, Windows Logs, **Security**, and used **Filter Current Log** for event **4740**.
2. Read the event: the locked **Account Name** and the **Caller Computer Name** (the machine sending the bad password).
3. In ADUC, opened the user, **Account** tab, and ticked **Unlock account**.
4. Confirmed the lockout message was gone.

## Key points
- **Unlock the account, not the device.**
- **Find the source first.** If you unlock before fixing the cause, it locks again.
- Event 4625 is a failed logon. Event 4740 is a lockout.
- On a real ticket, the Caller Computer Name points to the device to check, remotely, for a stale saved password (Credential Manager, mapped drives, phone mail, scheduled tasks).
- In the 4740 event, the **Subject** (the domain controller) is not the locked-out account.
