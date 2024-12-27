// src/index.tsx
import { Plugin, Modal } from "obsidian";
import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "regenerator-runtime/runtime";

import DiceRoller from "@/components/DicerRoller";

class DiceRollerModal extends Modal {
  private root: ReactDOM.Root | null = null;

  onOpen() {
    const { contentEl } = this;
    contentEl.classList.add("dark");
    this.root = ReactDOM.createRoot(contentEl);
    this.root.render(<DiceRoller />);
  }

  onClose() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

export default class ReactStarterPlugin extends Plugin {
  async onload(): Promise<void> {
    // Register a command to open the Dice Roller modal
    this.addCommand({
      id: "open-dice-roller",
      name: "Open Dice Roller",
      callback: () => {
        new DiceRollerModal(this.app).open();
      },
    });
  }
}
