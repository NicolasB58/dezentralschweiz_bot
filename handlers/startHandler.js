const handleStart = async (bot, msg) => {
    const chatId = msg.chat.id;
    const message = `
<b>Willkommen beim Dezentralschweiz Bot! 🇨🇭</b>

Hier sind die wichtigsten Befehle:

/meetups - Zeige bevorstehende Meetups
<i>Erhalte eine Liste aller anstehenden Veranstaltungen in der Dezentralschweiz Community.</i>

/links - Zeige Community-Links
<i>Entdecke wichtige Links und Ressourcen unserer Community.</i>

/meetup_vorschlagen - Schlage ein neues Event vor
<i>Möchtest du ein Meetup organisieren? Nutze diesen Befehl, um ein Nostr-Event vorzuschlagen. (DM only)</i>

/meetup_loeschen - Schlage ein neues Event vor
<i>Hast du beim erstellen eines Meetups einen Fehler gemacht oder das Meetup wurde abgesagt? Nutze diesen Befehl um ein Nostr Delete-Event abzusenden. (DM only)</i>

Wir freuen uns, dass du Teil unserer Community bist! Bei Fragen stehen wir dir gerne zur Verfügung.

<blockquote>Made with ❤️ by @g1ll0hn3r</blockquote>
`;
    await bot.sendMessage(chatId, message, {
        parse_mode: 'HTML',
        disable_notification: true
    });
};

export {
    handleStart
};
