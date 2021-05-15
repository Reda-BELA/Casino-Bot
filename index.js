const Discord = require("discord.js");


const Client = new Discord.Client;

const prefix = "$";

Client.on("ready", () => {
      console.log("Bot Finalizer");
});


Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    bot.user.setStatut("online");
    bot.user.setActivity("test", {type: 'WATCHING'});

    if(message.content == prefix + "help"){
    var embed = new Discord.MessageEmbed()
    .setColor("#db7c7c")
    .setTitle("**Commandes**")
    .setAuthor("Reda", "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/e35/159143244_450562556063284_6401230096176567867_n.jpg?tp=1&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=2GlKhLtIKmYAX885aW-&oh=5e9f7f53eb394981a8145a2750d6f22f&oe=6074D9E3")
    .setDescription("$ping \n $stats \n $kick \n $ban \n $mute \n $unmute \n $clear \n 𝙲𝚘𝚖𝚒𝚗𝚐 𝚂𝚘𝚘𝚗....")
    .setThumbnail("https://cdn.discordapp.com/attachments/779095695298658344/800828469037498398/Screenshot_20210118-214336_Snapchat.jpg")
}
    message.channel.send(embed);

    //la commande $help pour savoir les autres commandes.
    if(message.content == prefix + "help"){
        message.reply("**Commandes :** \n $ping \n $stats \n $kick \n $ban \n $mute \n $unmute \n $clear \n 𝙲𝚘𝚖𝚒𝚗𝚐 𝚂𝚘𝚘𝚗....");
    }

    if(message.content == prefix + "stats"){
        message.channel.send(message.author.username + " a pour **identifiant** :" + message.author.id);
    }
          
    if(message.member.permissions.has("MANAGE_MESSAGES")) {
        if(message.content.startsWith(prefix + "clear")) {
            let args = message.content.split(" ");
            
          if(args[1] == undefined) {
              message.reply("Nombre de Message non Ou Mal défini.");
          }
          else {
              let number = parseInt(args[1]);
              if(isNaN(number)) {
                  message.reply("Nombre de Message non Ou Mal défini.");
              }
              else {
                  message.channel.bulkDelete(number).then(message => {
                   console.log("Supression de " + messages.size + " méssages Réussi!");
                  }).catch(err => {
                     console.log("Erreur durant la Supprésion du Message :" + err);
                  });
              }
          }
        }
    }

    if(message.member.hasPermission("ADMINISTRATOR")) {
        if(message.content.startsWith(prefix + "ban")) {
            let mention = message.mentions.members.first();

            if(mention == undefined) {
                message.reply("Membre(e) non ou mal Mentionné(e).");
            }
            else {
                if(mention.bannable) {
                mention.ban();
                message.channel.send(mention.displayName + " a été Banni(e).");

                }
                else {
                    message.reply("Impossible de Bannir ce membre.");
                }
            }
        }
        else if(message.content.startsWith(prefix + "kick")) {
            let mention = message.mentions.members.first();

            if(mention == undefined) {
                message.reply("Membre(e) Non ou Mal Mentionné(e).");
            }
            else {
                if(mention.kickable) {
                    mention.kick();
                    message.channel.send(mention.displayName + " a été Kick")
                }
                else {
                    message.reply("Impossible de Kick ce membre")
                }
            }
        }
        else if(message.content.startsWith(prefix + "mute")) {
            let mention = message.mentions.members.first();

            if(mention == undefined) {
                message.reply("Membre(e) Non ou Mal Mentionné(e).");
            }
            else {
                mention.roles.add("816036960954744864")
                message.channel.send(mention.displayName + " a été Mute")
            }
        }
        else if(message.content.startsWith(prefix + "unmute")) {
            let mention = message.mentions.members.first();

            if(mention == undefined) {
                message.reply("Membre(e) Non ou Mal Mentionné(e).");
            }
            else {
                mention.roles.remove("816036960954744864")
                message.channel.send(mention.displayName + " a été Unmute")
            }
        }
     }

    if(message.content == prefix + "ping"){
        message.reply("pong!, vous avez la Connexion d'un réalmonté !");
    }


});

Client.login("ODIwMzMwNzY2NjI1MDEzODAw.YEzmjw.ChyWqln3FGfFulQag3_ruJg78Js");



