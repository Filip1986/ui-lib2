# Publishing and Using the UI Components Library

## How to Publish the Library

### Option 1: Publish to npm (Public or Private Registry)

1. **Build the library:**
   ```bash
   cd ui-lib2
   ng build ui-components
   ```

2. **Navigate to the dist folder:**
   ```bash
   cd dist/ui-components
   ```

3. **Update package.json with your details:**
   - Update the `name` field to a unique package name
   - Update `version` field
   - Add `author`, `description`, `keywords`, `repository`, etc.

4. **Login to npm:**
   ```bash
   npm login
   ```

5. **Publish:**
   ```bash
   npm publish
   # For scoped packages (e.g., @yourusername/ui-components):
   npm publish --access public
   ```

### Option 2: Use as Local Package with npm link

1. **Build the library:**
   ```bash
   cd ui-lib2
   ng build ui-components
   ```

2. **Create npm link:**
   ```bash
   cd dist/ui-components
   npm link
   ```

3. **In your other Angular project, link the package:**
   ```bash
   cd /path/to/your/other/project
   npm link ui-components
   ```

### Option 3: Use from Git Repository

1. **Build and commit:**
   ```bash
   ng build ui-components
   git add dist/ui-components
   git commit -m "Build library"
   git push
   ```

2. **Install in other projects:**
   ```bash
   npm install git+https://github.com/yourusername/ui-lib2.git#branch-name
   ```

### Option 4: Use from Local File System

1. **Build the library:**
   ```bash
   ng build ui-components
   ```

2. **In your other Angular project's package.json:**
   ```json
   {
     "dependencies": {
       "ui-components": "file:../ui-lib2/ui-lib2/dist/ui-components"
     }
   }
   ```

3. **Install:**
   ```bash
   npm install
   ```

## How to Use in Your Angular Projects

### 1. Installation

Choose one of the installation methods above. For published packages:

```bash
npm install ui-components
```

### 2. Import Components

In your Angular component file:

```typescript
import { Component } from '@angular/core';
import { Button, Card } from 'ui-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [Button, Card],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  // Your component logic
}
```

### 3. Use in Templates

```html
<!-- Button Examples -->
<uilib-button variant="material" color="primary">
  Click Me
</uilib-button>

<uilib-button 
  variant="bootstrap" 
  size="large" 
  color="success"
  (click)="onSubmit()">
  Submit Form
</uilib-button>

<uilib-button 
  variant="minimal" 
  [disabled]="isLoading"
  [fullWidth]="true">
  {{ isLoading ? 'Loading...' : 'Process' }}
</uilib-button>

<!-- Card Examples -->
<uilib-card variant="material" elevation="medium">
  <div card-header>User Information</div>
  
  <div class="user-details">
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
  </div>
  
  <div card-footer>
    <uilib-button variant="material" color="primary" size="small">
      Edit
    </uilib-button>
    <uilib-button variant="minimal" color="secondary" size="small">
      Cancel
    </uilib-button>
  </div>
</uilib-card>

<uilib-card 
  variant="bootstrap" 
  [bordered]="true"
  [hoverable]="true"
  (click)="onCardClick()">
  <p>Clickable card with hover effect</p>
</uilib-card>
```

### 4. Module-Based Projects (Non-Standalone)

If you're using traditional NgModule-based components:

```typescript
import { NgModule } from '@angular/core';
import { Button, Card } from 'ui-components';

@NgModule({
  declarations: [
    // Your components
  ],
  imports: [
    // Other modules
    Button,
    Card
  ]
})
export class YourModule { }
```

## Complete Example Project Setup

### Step 1: Create a new Angular project

```bash
ng new my-app
cd my-app
```

### Step 2: Install the UI components library

```bash
# If published to npm
npm install ui-components

# Or use npm link
npm link ui-components

# Or use local file
npm install ../ui-lib2/ui-lib2/dist/ui-components
```

### Step 3: Create a component

```bash
ng generate component user-profile
```

### Step 4: Use the library components

**user-profile.component.ts:**
```typescript
import { Component } from '@angular/core';
import { Button, Card } from 'ui-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, Button, Card],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Developer'
  };

  isEditing = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}
```

**user-profile.component.html:**
```html
<div class="profile-container">
  <uilib-card variant="material" elevation="medium">
    <div card-header>
      <h2>User Profile</h2>
    </div>

    <div class="profile-content">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Role:</strong> {{ user.role }}</p>
    </div>

    <div card-footer>
      <uilib-button 
        variant="material" 
        color="primary" 
        size="small"
        (click)="toggleEdit()">
        {{ isEditing ? 'Save' : 'Edit' }}
      </uilib-button>
      <uilib-button 
        variant="minimal" 
        color="secondary" 
        size="small"
        *ngIf="isEditing"
        (click)="toggleEdit()">
        Cancel
      </uilib-button>
    </div>
  </uilib-card>
</div>
```

## Continuous Development Workflow

When actively developing the library and using it in another project:

1. **Watch mode for library:**
   ```bash
   cd ui-lib2/ui-lib2
   ng build ui-components --watch
   ```

2. **In your consuming project, use npm link:**
   ```bash
   npm link ui-components
   ```

3. **Run your application:**
   ```bash
   ng serve
   ```

Changes to the library will be automatically reflected in your application!

## Troubleshooting

### Issue: Module not found

**Solution:** Make sure the paths are correctly configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "ui-components": ["./node_modules/ui-components"]
    }
  }
}
```

### Issue: Styles not applying

**Solution:** The library includes encapsulated styles. They should work automatically. If not, check that ViewEncapsulation is not being modified.

### Issue: Type errors

**Solution:** Make sure your TypeScript version is compatible:
```bash
npm install --save-dev typescript@latest
```

## Version Management

Update version in `projects/ui-components/package.json` before publishing:

```json
{
  "name": "ui-components",
  "version": "1.0.1",
  ...
}
```

Follow semantic versioning:
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

## Best Practices

1. **Always build before publishing:**
   ```bash
   ng build ui-components --configuration production
   ```

2. **Test in demo app before publishing:**
   ```bash
   ng serve demo
   ```

3. **Document breaking changes** in CHANGELOG.md

4. **Tag releases** in Git:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

## Next Steps

- Add more components (Input, Select, Modal, etc.)
- Add unit tests
- Setup CI/CD for automated publishing
- Create a documentation website
- Add accessibility features (ARIA labels)
