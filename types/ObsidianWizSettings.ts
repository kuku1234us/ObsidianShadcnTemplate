/**
 * Type declarations for ObsidianWiz settings
 *
 * This module contains the interface and default settings for the ObsidianWiz plugin.
 * It is used across the application to ensure type safety for plugin settings.
 *
 * @module @/types/ObsidianWizSettings
 */

export interface ObsidianWizSettings {
  iconFolder: string;
}

export const DEFAULT_SETTINGS: ObsidianWizSettings = {
  iconFolder: ".obsidian/icons",
};
