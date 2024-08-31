// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{window, Manager};

mod menu;
mod settings;

fn main() {
    tauri::Builder::default()
        .menu(menu::create_app_menu())
            .on_menu_event(|event| {
                match event.menu_item_id() {
                    "settings" => {
                        println!("Settings Works");
                        let window = settings::settings_window(&event.window().app_handle());
                        window.set_focus().unwrap();
                    }
                    _ => {}
                }
            })
        .plugin(tauri_plugin_pty::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}