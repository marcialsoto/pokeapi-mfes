import { EventCallback } from "./EventCallback";

export class PubSubServicePattern {

  private static events: Record<string, EventCallback[]>={};

  public static subscribe(eventName: string, callback: EventCallback): void {
     if (!PubSubServicePattern.events[eventName]) {
      PubSubServicePattern.events[eventName] = [];
    }
    PubSubServicePattern.events[eventName].push(callback);
  }

  public static unsubscribe(eventName: string, callback: EventCallback): void {
    const eventCallbacks = PubSubServicePattern.events[eventName];
    if (eventCallbacks) {
      PubSubServicePattern.events[eventName] = eventCallbacks.filter(
        (cb) => cb !== callback
      );
    }
  }

  public static emit(eventName: string, ...args: any[]): void {
    const eventCallbacks = PubSubServicePattern.events[eventName];
    if (eventCallbacks) {
      eventCallbacks.forEach((callback) => {
        callback(...args);
      });
    }

  }

}
