var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
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
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
            // If there are no more energy cells, start upgrading the controller.
            else
            {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
    }
};

module.exports = roleHarvester;