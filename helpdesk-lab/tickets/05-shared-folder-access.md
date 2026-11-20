# Ticket 5: Shared Folder Access

**Scenario:** A Marketing user (Kevin Wright) gets "Access denied" on the Finance share and says his manager approved access.

## Steps I took
1. Created the security group `Finance-Share` (**Global**, **Security**) in the Finance OU and added two Finance users.
2. Created `C:\Shares\Finance` with a test file and shared it as `Finance`.
3. **Share permissions:** removed Everyone, added `Finance-Share` with **Change**.
4. **NTFS permissions:** disabled inheritance (converted to explicit), added `Finance-Share` with **Modify**, removed the Users group.
5. Did **not** add the requester until approval from the folder owner was confirmed. After approval, added him to `Finance-Share`.
6. He must log off and on to receive the new group.

## Verification
- `net share Finance` showed the path and `LAB\Finance-Share, CHANGE`.
- `icacls C:\Shares\Finance` showed Modify for the group, with Users removed.
- `dsget` showed the requester as a member of `Finance-Share`.

## Takeaways
- Use **groups, not individual users**.
- The **more restrictive** of share and NTFS permissions applies.
- Get **approval** before granting access, and note who approved.
- Adding someone to a group doesn't take effect until a new logon.
