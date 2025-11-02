# Meadowlark

eBird rare bird bot for the [Nebraska birding discord server](https://discord.gg/HZYfv7fRu6)

![example discord alert](./example.png)

## Usage

`npm run rba`

## Cron setup

We run this with a cron job, so it runs ever 15 minutes, like this:

```
*/15 npm run rba
```

## Configuration

To run, you will need a [discord bot and token](https://github.com/reactiflux/discord-irc/wiki/creating-a-discord-bot-&-getting-a-token) and an [ebird token](https://ebird.org/api/keygen). Put these in a file called `.env`

```
DISCORD_TOKEN="XXX"
EBIRD_API_TOKEN="XXXX"
```

## Customization for your server

If you'd like to use this for other servers, you will need to fork this repo and update [`config.ts`](./config.ts) and [`exclude.ts`](./exclude.ts) (optional) to match the settings the discord channels and regions that you want alerts for.
