roleSpawning = {

    run: function(spawn) {
    	var totalHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    	var totalUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var totalBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    	// Spawn harvester if there are less than 2 harvesters.
    	if(totalHarvesters.length < 2 && spawn.energy > 250) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester', resourceRoomIndex: 0});
            console.log('Spawning new harvester: ' + newName);
        }

        // Spawn Upgraders if there are less than 4 upgraders.
    	if(totalUpgraders.length < 4 && spawn.energy > 250) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE,MOVE], undefined, {role: 'upgrader', resourceRoomIndex: 0});
            console.log('Spawning new upgrader: ' + newName);
        }
        // Spawn Upgraders if there are less than 2 builders.
        if(totalBuilders.length < 2 && spawn.energy > 250) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE,MOVE], undefined, {role: 'builder', resourceRoomIndex: 0});
            console.log('Spawning new builder: ' + newName);
        }
    }
}

module.exports = roleSpawning;
