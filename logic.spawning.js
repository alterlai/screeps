roleSpawning = {

    run: function(spawn) {
    	var totalHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    	var totalUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var totalBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

        var ammountOfHarvesters = 2;
        var ammountOfUpgraders = 4;
        var ammountOfBuilders = 3;

    	// Spawn harvester if there are less than 2 harvesters.
    	if(totalHarvesters.length < ammountOfHarvesters && spawn.energy > 250) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester', resourceRoomIndex: 0});
            console.log('Spawning new harvester: ' + newName);
        }

        // Spawn Upgraders if there are less than 2 upgraders.
    	if(totalUpgraders.length < ammountOfUpgraders && spawn.energy > 250) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', resourceRoomIndex: 0});
            console.log('Spawning new upgrader: ' + newName);
        }
        // Spawn Upgraders if there are less than 2 upgraders.
        if(totalBuilders.length < ammountOfBuilders && spawn.energy > 250) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', resourceRoomIndex: 0});
            console.log('Spawning new builder: ' + newName);
        }
    }
}

module.exports = roleSpawning;