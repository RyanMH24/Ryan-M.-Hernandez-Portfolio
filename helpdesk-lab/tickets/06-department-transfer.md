# Ticket 6: Department Transfer

**Scenario:** HR asks to move Marcus Lee from Sales to Finance, effective Monday, reporting to Amir Khan.

## Steps I took
1. In ADUC, right-click the user in **Sales**, **Move…**, and chose the **Finance** OU.
2. On **Organization**: Title `Finance Analyst`, Department `Finance`, Manager `Amir Khan`.
3. On **Member Of**: checked for the old group (`Sales-Team`, not present) and added `Finance-Share`.

## Verification
- `dsquery` showed the user in `OU=Finance`, `dsget` showed the title, department and manager, and `-memberof` showed `Finance-Share` and Domain Users.

## Takeaways
- Moving an OU does **not** change group membership. Remove old groups and add new ones yourself.
- Timing matters: remove old access on the last day in the old role, and give new access when the new role starts, unless HR says otherwise.
- The user needs a new logon to pick up the new group.
