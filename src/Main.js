
const PluginStructure = require(`${bbmcPath}/plugin/PluginStructure`);
const JoinEventHandler = require("./handler/JoinEventHandler");

class Main extends PluginStructure{

    successfullyEnabled(){
        this.log.info("Hmm thats weird? Working plugin?");
    }

    handleEvents() {
		this.server.eventsHandler.on("join", async (ev) => {
			(new JoinEventHandler(this.server, ev, this.log)).run();
		});
	}
}

module.exports = Main;