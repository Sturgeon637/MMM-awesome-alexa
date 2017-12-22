"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class State {
    constructor(components, name) {
        this.components = components;
        this.name = name;
        this.allowedStateTransitions = new Map();
    }
    transition(state) {
        if (!this.canTransition(state)) {
            console.error(`Invalid transition to state: ${state}`);
            return;
        }
        console.log(`transiting to state: ${state.name}`);
        this.onExit();
        state.onEnter();
    }
    canTransition(state) {
        return this.allowedStateTransitions.has(state.name);
    }
    set AllowedStateTransitions(states) {
        this.allowedStateTransitions = states;
    }
}
exports.State = State;
//# sourceMappingURL=base.state.js.map