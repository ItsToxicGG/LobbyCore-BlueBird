class JoinEventHandler {
	server;
	ev;
	log;
    main;

	constructor(server, ev, log) {
		this.server = server;
		this.ev = ev;
		this.log = log;
	}

	run() {
        player = this.ev.player;
		this.ev.joinMessage = "Player joining " + this.server.getPlayerName(player);
	}
}

module.exports = JoinEventHandler;