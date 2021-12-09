import "reflect-metadata";
import { Intents } from "discord.js";
import { Client } from "discordx";
import { token } from "../settings.json";
import { exec } from "child_process"; 


const client = new Client({
  simpleCommand: {
    prefix: "!",
  },
  intents: [
    Intents.FLAGS.GUILDS,
    ],
  // If you only want to use global commands only, comment this line
  botGuilds: [(client: Client) => client.guilds.cache.map((guild: any) => guild.id)],
  silent: true,
});



client.once("ready", async () => {
	// scan port + set status

  // init permissions; enabled log to see changes
  await client.initApplicationPermissions(true);
  // uncomment this line to clear all guild commands,
  // useful when moving to global commands from guild commands
  //  await client.clearApplicationCommands(
  //    ...client.guilds.cache.map((g) => g.id)
  //  );

  console.log("Bot started");
	const task = async () => {
		while(true){
			await new Promise(r => setTimeout(r, 10000));
			newActivity();
		}
	}
	task();

});

async function run() {
  // with cjs
  // await importx(__dirname + "/{events,commands}/**/*.{ts,js}");
  // with ems
  client.login(token ?? ""); // provide your bot token
}

function newActivity(): void{ 
	let res = exec(`sudo forge-1.12.2d command list | \
								 sed -r 's/\\x1B\\[([0-9]{1,3}(;[0-9]{1,2})?)?[mGK]//g' \
								 | grep -o "[0-9]/69"`, (error, stdout) => { // get the output, removes bold text 
		if(error){																							//and get the number of players
			console.error("issue in getPlayerNumber()", error);
		}
		if(client.user != null){
			if(stdout.includes("0/69")){
				client.user.setActivity(`nobody is online`, {type: 'PLAYING'});
			}
			else if(stdout.includes("1/69")){
				client.user.setActivity(`${stdout} player online`, {type: 'PLAYING'});
			}

			else client.user.setActivity(`${stdout} players online`, {type: 'PLAYING'});
		}
		else console.log("client was null");
	});
}

run();

