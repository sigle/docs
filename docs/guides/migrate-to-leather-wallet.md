---
sidebar_position: 1
title: Migrate to the Leather web wallet
---

If you created your account before mid May 2022, you were used to using "Blockstack Connect" to sign in to your account. Follow this guide to migrate your account to the new Leather web wallet and continue using Sigle.

:::caution

Please read this guide carefully before deciding which approach you want to go with.

:::

## Option 1 - Create a new account / use your already existing Hiro account

:::note

This is the recommended approach if you interact with other Stacks apps in the ecosystem.

:::

### Guide

1. If you don't already have a Leather wallet account, follow [this guide](../getting-started/create-leather-wallet.md) to create a new one.
2. Login to Sigle with an account owning a .btc name (you can get one at [btc.us](https://btc.us/)).
3. Navigate to https://app.sigle.io/migrate-legacy-account.
4. Enter your legacy 12 word secret and legacy username and click on "Migrate".
5. Open a ticket on discord so we can setup a redirect from your legacy username to your new one.

![Legacy migrate](/img/docs/guides/migrate-legacy-screen.png)

## Option 2 - Keep your username and secret key

#### Pros

- Keep using Sigle as usual
- Use the Hiro wallet extension and access other Stacks apps
- No need to manually migrate your [Gaia](https://docs.stacks.co/gaia/overview) content (drafts / published stories, settings...)

#### Cons

- Need to run a script to transfer the subdomain and wait for the tx to be processed
- If you already have an Hiro wallet, you'll need to use to logout from your current account in the Hiro extension

### Using the Stacks CLI

In order to use the Stacks Command Line Interface you need to have Node.js installed on your machine.

To install Node.js, follow the instructions on [this page](https://nodejs.org/en/).

In your computer applications, open the "Terminal" one and run the following command inside:

```sh
npm install -g @stacks/cli
```

This will install the Stacks CLI and make it available globally on your machine.

Then, run the following command and replace `<YOUR_BLOCKSTACK_CONNECT_SECRET_KEY>` with your 12 word secret key (without `<` and `>` chars):

```sh
stx migrate_subdomains "<YOUR_BLOCKSTACK_CONNECT_SECRET_KEY>" https://registrar.stacks.co
```

The CLI will ask you to confirm the operation, press yes and enter, and then it will show you the transaction ID. If the process was successful, you will see the following message printed in your terminal:

```json
{
  "status": true,
  "message": "Your subdomains transfer was received, and will be included in the blockchain soon with txId: f85a649fcdfbc3002368f46445ce8b0cc5b6e97158cd1d1f1fe8d0fb945ac7f3"
}
```

The transaction ID can be used to monitor the progress of the transaction on [the Stacks explorer](https://explorer.stacks.co). Once the transaction is included in the blockchain, you can login to Sigle using the Hiro extension and your 12 word secret key.