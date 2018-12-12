//
//  SegmentedSettingsViewController.swift
//  Anywhere Reader
//
//  Created by Conner on 11/7/18.
//  Copyright © 2018 Samantha Gatt. All rights reserved.
//

import UIKit
import FacebookLogin

class SettingsViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        logOutButton.layer.cornerRadius = 4.0
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        updateTheme()
    }
    
    
    // MARK: - Outlets
    
    @IBOutlet weak var logOutButton: UIButton!
    
    
    // MARK: - Actions

    @IBAction func dismissSettingsVC(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func logOut(_ sender: Any) {
        let alertController = UIAlertController(title: "Are you sure you want to sign out?", message: nil, preferredStyle: .alert)
        let cancelAction = UIAlertAction(title: "Cancel", style: .cancel, handler: nil)
        let signOutAction = UIAlertAction(title: "Sign Out", style: .destructive) { _ in
            // Logs user out using FacebookLogin SDK
            LoginManager().logOut()
        }
        alertController.addAction(cancelAction)
        alertController.addAction(signOutAction)
        present(alertController, animated: true)
    }
    
    @IBAction func presentPreferences(_ sender: Any) {
        let storyboard = UIStoryboard(name: "Preferences", bundle: nil)
        guard let preferencesVC = storyboard.instantiateInitialViewController() else { return }
        preferencesVC.providesPresentationContextTransitionStyle = true
        preferencesVC.definesPresentationContext = true
        preferencesVC.modalPresentationStyle = .overCurrentContext
        preferencesVC.modalTransitionStyle = .crossDissolve
        
        self.present(preferencesVC, animated: true, completion: nil)
    }
    
    // MARK: - Private Functions
    private func updateTheme() {
        
    }
}
