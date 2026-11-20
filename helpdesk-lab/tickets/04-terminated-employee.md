# Ticket 4: Terminated Employee

**Scenario:** HR reports that an employee (Ben Jones, HR) was terminated effective immediately. His mailbox must be kept and equipment collected.

## Steps I took
1. **Disabled** the account (not deleted).
2. **Reset the password** to a new value so saved or cached credentials stop working.
3. **Moved** the account to a **Disabled Users** OU.
4. Set the **Description** to `Terminated 11/18/2026, HD-1044` (date and ticket number).
5. Reviewed group memberships (only Domain Users in this case).

## Verification
- `net user bjones /domain` showed **Account active: No** and a password last-set time of today.
- `dsquery` showed the account in `OU=Disabled Users`, and `dsget` showed `disabled: yes` and the description.

## Handed off or still to do
- Block Microsoft 365 sign-in and revoke sessions, keeping the mailbox for review.
- Remove Atlassian and other application access, VPN, and company data on his phone.
- Collect equipment and update the asset record.

## Takeaways
- **Disable, don't delete:** the mailbox, files and audit history are needed, and deleting is permanent.
- Resetting the password blocks any saved credentials, and the order and speed matter on a termination.
- AD is only part of offboarding. The other systems are where access is easily missed.
