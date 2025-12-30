# GitHub Personal Access Token Setup

This guide helps you create a Personal Access Token (PAT) for Changesets to create Pull Requests.

## Why is this needed?

Your organization has policies that prevent GitHub Actions from creating PRs using the default `GITHUB_TOKEN`. Therefore, we need to use a Personal Access Token instead.

## Step-by-Step Guide

### Step 1: Create Personal Access Token

1. **Go to GitHub Settings**

   - Visit: https://github.com/settings/tokens
   - Or: Click your avatar → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Click "Generate new token"**

   - Select "Generate new token (classic)"

3. **Configure Token**

   - **Note**: `Changesets Release Token for officesdk/ui`
   - **Expiration**: 90 days (or custom)
   - **Select scopes**: Check these boxes
     - ✅ `repo` (Full control of private repositories)
       - This includes: code, commit status, pull requests, etc.
     - ✅ `workflow` (Update GitHub Action workflows)

4. **Generate Token**
   - Click "Generate token" button
   - **IMPORTANT**: Copy the token immediately (starts with `ghp_`)
   - You won't be able to see it again!

### Step 2: Add Token to GitHub Secrets

1. **Go to Repository Settings**

   - Visit: https://github.com/officesdk/ui/settings/secrets/actions
   - Or: Repository → Settings → Secrets and variables → Actions

2. **Create New Secret**
   - Click "New repository secret"
   - **Name**: `CHANGESETS_TOKEN`
   - **Value**: Paste your PAT (ghp_xxxxx...)
   - Click "Add secret"

### Step 3: Verify Setup

The workflow has been updated to use `CHANGESETS_TOKEN` instead of `GITHUB_TOKEN`.

To trigger the workflow:

```bash
# Option 1: Push an empty commit
git commit --allow-empty -m "chore: trigger release workflow"
git push origin main

# Option 2: Re-run the failed workflow in GitHub Actions UI
# Go to: https://github.com/officesdk/ui/actions
# Click on the failed workflow
# Click "Re-run all jobs"
```

## What the Token is Used For

The `CHANGESETS_TOKEN` is used by Changesets Action to:

1. **Create Pull Requests**

   - Create "chore: release new version" PR
   - Update PR with version changes

2. **Commit Changes**

   - Commit version updates to package.json
   - Commit CHANGELOG updates

3. **Create Git Tags**

   - Tag releases (v0.2.0, v0.3.0, etc.)

4. **Create GitHub Releases**
   - Publish release notes on GitHub

## Security Best Practices

1. **Token Expiration**

   - Set expiration (recommended: 90 days)
   - Rotate regularly

2. **Minimal Scopes**

   - Only grant necessary permissions
   - `repo` and `workflow` are sufficient

3. **Secret Management**

   - Never commit tokens to code
   - Store only in GitHub Secrets
   - Revoke if compromised

4. **Monitoring**
   - Check token usage in GitHub settings
   - Review Actions logs regularly

## Troubleshooting

### Issue: Token expired

**Solution**:

1. Create a new PAT (same steps as above)
2. Update the `CHANGESETS_TOKEN` secret with new value

### Issue: Permission denied

**Solution**:

- Verify token has `repo` and `workflow` scopes
- Check token is not expired
- Ensure token is from a user with write access to the repository

### Issue: Token not working

**Solution**:

1. Go to: https://github.com/settings/tokens
2. Find your token
3. Click on it to verify scopes
4. Regenerate if needed
5. Update GitHub Secret

## Alternative: Organization Token

If you have organization admin access, you can also:

1. Create an organization-level token
2. Or modify organization policies to allow Actions to create PRs

Contact your organization admin if needed.

## Next Steps

After setting up the token:

1. ✅ Create PAT with `repo` and `workflow` scopes
2. ✅ Add to GitHub Secrets as `CHANGESETS_TOKEN`
3. ✅ Trigger workflow (push or re-run)
4. ✅ Verify Version PR is created
5. ✅ Merge Version PR to publish

## Support

For issues with GitHub tokens:

- GitHub Docs: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
- Changesets Docs: https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md
