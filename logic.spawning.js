roleSpawning = {

    run: function(spawn) {
    	var totalHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    	var totalUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var totalBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var totalRepairmen = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairman');

        //Total ammount of energy in the room.
        var totalEnergyInRoom = spawn.room.energyAvailable;

        var ammountOfHarvesters = 2;
        var ammountOfUpgraders = 4;
        var ammountOfBuilders = 3;
        var ammountOfRepairmen = 2;

    	// Spawn harvester if there are less than 2 harvesters.
    	if(totalHarvesters.length < ammountOfHarvesters && totalEnergyInRoom > 400) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester', resourceRoomIndex: 0});
            console.log('Spawning new harvester: ' + newName);
        }

        // Spawn Upgraders if there are less than 2 upgraders.
    	if(totalUpgraders.length < ammountOfUpgraders && totalEnergyInRoom > 400) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', resourceRoomIndex: 0});
            console.log('Spawning new upgrader: ' + newName);
        }
        // Spawn Upgraders if there are less than 2 upgraders.
        if(totalBuilders.length < ammountOfBuilders && totalEnergyInRoom > 400) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', resourceRoomIndex: 0});
            console.log('Spawning new builder: ' + newName);
        }

        // Spawn Repairmen if there are less than given ammount.
        if (totalRepairmen.length < ammountOfRepairmen && totalEnergyInRoom > 400)
        {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'repairman', repairing: false});
            console.log('Spawning new repairman: ' + newName); 
        }
    }
}

module.exports = roleSpawning;