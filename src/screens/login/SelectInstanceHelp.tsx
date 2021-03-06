/*
 * This file is part of OrangeHRM
 *
 * Copyright (C) 2020 onwards OrangeHRM (https://www.orangehrm.com/)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  StackActions,
} from '@react-navigation/native';
import MainLayout from 'layouts/MainLayout';
import Text from 'components/DefaultText';
import Icon from 'components/DefaultIcon';
import withTheme, {WithTheme} from 'lib/hoc/withTheme';

class SelectInstanceHelp extends React.Component<SelectInstancePropsHelp> {
  onPressClose = () => {
    this.props.navigation.dispatch(StackActions.pop());
  };

  render() {
    const {theme} = this.props;
    const borderPadding = theme.spacing * 6;
    return (
      <MainLayout statusBarBackgroundColor={theme.palette.statusBar}>
        <View style={{paddingTop: borderPadding}}>
          <View
            style={[styles.closeIconView, {paddingHorizontal: borderPadding}]}>
            <TouchableWithoutFeedback onPress={this.onPressClose}>
              <Icon
                name={'close'}
                style={[
                  styles.closeIconStyle,
                  {
                    paddingVertical: theme.spacing * 4,
                    paddingLeft: theme.spacing * 4,
                  },
                ]}
              />
            </TouchableWithoutFeedback>
          </View>

          <View style={[styles.headerView, {paddingBottom: theme.spacing * 6}]}>
            <View
              style={{
                backgroundColor: theme.palette.secondary,
                width: theme.spacing * 3,
                borderBottomRightRadius: theme.borderRadius,
                borderTopRightRadius: theme.borderRadius,
              }}
            />
            <Text
              style={[
                styles.bold,
                {
                  fontSize: theme.typography.headerFontSize,
                  paddingLeft: theme.spacing * 3,
                  paddingRight: borderPadding,
                  color: theme.palette.secondary,
                },
              ]}>
              {'Having trouble accessing your OrangeHRM system?'}
            </Text>
          </View>

          <View style={{paddingHorizontal: borderPadding}}>
            <View style={[styles.row, {paddingBottom: theme.spacing * 4}]}>
              <Icon
                name={'help-circle'}
                style={{paddingRight: theme.spacing * 2}}
              />
              <Text style={[styles.justify, styles.textView]}>
                {
                  'Refer to "How to Configure URL and Login" in Help & Support (accessible via the Web system) in order to find your system URL.'
                }
              </Text>
            </View>

            <View style={{paddingBottom: theme.spacing * 4}}>
              <Image
                source={require('images/help-config-url.png')}
                style={styles.image}
                resizeMode={'contain'}
              />
            </View>

            <View style={[styles.row, {paddingBottom: theme.spacing * 4}]}>
              <Icon
                name={'link-variant'}
                style={{paddingRight: theme.spacing * 2}}
              />
              <View style={styles.textView}>
                <Text style={styles.justify}>
                  {
                    'Make sure you enter the correct OrangeHRM system URL in the given format.'
                  }
                </Text>
                <Text>{'(eg: https://example.orangehrm.com)'}</Text>
              </View>
            </View>

            <View style={[styles.row, {paddingBottom: theme.spacing * 4}]}>
              <Icon
                name={'link-variant'}
                style={{paddingRight: theme.spacing * 2}}
              />
              <View style={styles.textView}>
                <Text style={styles.justify}>
                  {
                    "Incases where your instance URL contains subpaths, you'll need to enter the complete URL."
                  }
                </Text>
                <Text>{'(eg: https://example.orangehrm.com/internal/hr)'}</Text>
              </View>
            </View>

            <View style={[styles.row, {paddingBottom: theme.spacing * 4}]}>
              <Icon
                name={'key-wireless'}
                style={{paddingRight: theme.spacing * 2}}
              />
              <Text style={[styles.justify, styles.textView]}>
                {
                  'If your instance is hosted in a private network, make sure you are connected to the VPN or in the same network to access the mobile app.'
                }
              </Text>
            </View>

            <View style={[styles.row, {paddingBottom: theme.spacing * 4}]}>
              <Icon
                name={'shield-check'}
                style={{paddingRight: theme.spacing * 2}}
              />
              <Text style={[styles.justify, styles.textView]}>
                {
                  'The instance should be hosted in a server with a valid SSL certificate to trust the URL to access the mobile app.'
                }
              </Text>
            </View>
          </View>

          <View
            style={{
              padding: borderPadding,
              paddingTop: theme.spacing * 4,
              backgroundColor: theme.palette.backgroundSecondary,
            }}>
            <Text style={styles.bold}>{'Note:'}</Text>
            <Text style={styles.justify}>
              {
                'The mobile application is only supported with OrangeHRM Open Source Web version 4.5 onwards. Please contact your system administrator to verify if your system supports the minimum requirements or contact OrangeHRM support via ossupport@orangehrm.com.'
              }
            </Text>
          </View>
        </View>
      </MainLayout>
    );
  }
}

interface SelectInstancePropsHelp extends WithTheme {
  navigation: NavigationProp<ParamListBase>;
}

const styles = StyleSheet.create({
  textView: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  justify: {
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
  closeIconStyle: {
    marginLeft: 0,
    marginRight: 0,
  },
  closeIconView: {
    flexDirection: 'row-reverse',
  },
  image: {
    width: '100%',
    height: 140,
  },
  headerView: {
    flexDirection: 'row',
  },
});

export default withTheme<SelectInstancePropsHelp>()(SelectInstanceHelp);
