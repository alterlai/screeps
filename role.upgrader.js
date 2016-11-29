var roleUpgrader = {
    /*
    * @To-Do: Error will occur when all resources are unavailable and resourceRoomIndex will tick over to a non-existing resource so the creep will get stuck
    */


    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('harvesting');
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('upgrading');
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            var sourcesRoomIndex = creep.memory.resourceRoomIndex;   
            var sources = creep.room.find(FIND_SOURCES);

            movement_code = creep.moveTo(sources[sourcesRoomIndex]);

            if (movement_code == ERR_NOT_IN_RANGE)
            {
                console.log(creep.name + ": Moving to target");
            }
            else if (movement_code == ERR_NO_PATH)
            {
                creep.memory.resourceRoomIndex++;
                console.log(creep.name + ": No path to source. Checking next source.");
            } 
            else if (movement_code == 0)
            {
                creep.harvest(sources[sourcesRoomIndex]);
            }
        }
    }
};

module.exports = roleUpgrader;