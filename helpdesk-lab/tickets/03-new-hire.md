# Ticket 3: New Hire Setup

**Scenario:** HR asks for an account for a new Sales Rep (Dana Cruz) starting Monday, reporting to Jane Smith.

## Steps I took
1. In ADUC, created the security group `Sales-Team` (**Global**, **Security**) in the Sales OU.
2. Created the user in the **Sales** OU with logon name `dcruz`.
3. Set a temporary password and ticked **User must change password at next logon**.
4. On the **Organization** tab: Title `Sales Rep`, Department `Sales`, Manager `Jane Smith`.
5. On **Member Of**, added `Sales-Team`.

## Verification
- Confirmed from the command line (`dsget`) that the account is enabled, must change its password at next logon, has the right title, department and manager, and belongs to `Sales-Team`.
- Sign-in was not tested.

## Handed off or still to do
- Microsoft 365 license, Atlassian/Jira access, laptop preparation, asset record.
- Credentials to be given to the manager by phone, not in the ticket.

## Takeaways
- Don't mark a ticket Resolved while parts are pending. Mark it Pending and say who owns what.
- Verify your own work after a change.
