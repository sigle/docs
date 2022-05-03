---
sidebar_position: 1
title: Migrate to the Hiro web wallet
---

If you created your account before mid May 2022, you were used to using "Blockstack Connect" to sign in to your account. Follow this guide to migrate your account to the new Hiro web wallet and continue using Sigle.

:::caution

Please read this guide carefully before deciding which approach you want to go with.

:::

## Option 1 - Create a new account / use your already existing Hiro account

:::note

This is the recommended approach if you interact with other Stacks apps in the ecosystem.

:::

#### Pros

- Use the Hiro wallet extension and access other Stacks apps
- Use a .btc domain / register a new free .id.stx subdomain

#### Cons

- You have to manually migrate your [Gaia](https://docs.stacks.co/gaia/overview) content from the old to the new account. If you want us to provide a tool for this, [vote for this feature](https://sigle.canny.io/feature-requests/p/allow-to-transfer-blog-to-a-new-account) so we can prioritise it.

### Guide

1. If you don't already have a Hiro wallet account, follow [this guide](../getting-started/create-hiro-wallet.md) to create a new one.
2. Login to Sigle

   a. Login to Sigle with an account owning a .btc name (you can get one at [btc.us](https://btc.us/))

   b. Login to Sigle with your account and follow the UI to register a new free subdomain

3. Manually copy the content from your old account to the new account. You will need to copy the **drafts**, **published stories** and **settings**.

## Option 2 - Keep your username and secret key

#### Pros

- Keep using Sigle as usual
- Use the Hiro wallet extension and access other Stacks apps
- No need to manually migrate your [Gaia](https://docs.stacks.co/gaia/overview) content (drafts / published stories, settings...)

#### Cons

- Need to run a script to transfer the subdomain and wait for the tx to be processed

:::danger

This option is not available at the moment.

If you want to keep your username, we recommend that you wait and keep using the legacy "Blockstack connect" for now.

:::

The Stacks team is working on adding support for transferring subdomains to new addresses. You can track the progress [here](https://github.com/hirosystems/stacks.js/issues/1209).
