use sysinfo::{System, SystemExt, ProcessExt};

fn get_running_processes() -> Vec<String> {
    let mut sys = System::new_all();
    sys.refresh_all();

    sys.processes()
        .iter()
        .map(|(_, proc_)| format!("[{}] {}", proc_.pid(), proc_.name()))
        .collect()
}
