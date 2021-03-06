var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var logicSpawning = require('logic.spawning');
var roleRepairman = require('role.repairman');

module.exports.loop = function () {

    //General vars
    spawn1Room = Game.spawns.Spawn1.room;

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    // Spawning logic
    logicSpawning.run(Game.spawns.Spawn1);


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester')
         {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') 
        {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder')
        {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'repairman')
        {
            roleRepairman.run(creep);
        }
    }
}