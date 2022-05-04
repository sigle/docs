---
sidebar_position: 2
title: Update BNS zonefile
---

When transferring a BNS name to a new address, the zonefile linking the BNS name to your [Gaia storage](https://docs.stacks.co/gaia/overview) (the decentralised storage Sigle uses to store your data) is erased.

To let Sigle and all the other Stacks apps know where to find your Gaia bucket, you need to update your BNS zonefile. Don't worry the process is simple!

1. First visit [btc.us](https://btc.us/) and login with the account owning the BNS name you want to update.
2. Once logged in, on the top right corner, click the on the `Account` link.
3. On the account page click on the **"Advanced"** tab, you should now see the records attached to your account. To update them, click on the **"Add profile record"** button.

![Add profile record](/img/docs/guides/update-bns-zonfile-add-profile.png)

4. You should see a new part showing **"\_http.\_tcp"** with an "URI" type pointing to your gaia profile. You can click on the **"Save changes"** button.

![Save profile change](/img/docs/guides/update-bns-zonfile-save.png)

5. Approve the transaction which should looks like the following screenshot and wait for the on-chain confirmation.

![Transaction](/img/docs/guides/update-bns-zonfile-tx.png)

6. Once the transaction is confirmed, you can go back to Sigle and use the app!
